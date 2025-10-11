#!/bin/bash

# StressNavigator Website Deployment Script
# This script builds the React app and deploys it to AWS S3 with CloudFront invalidation

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables from .env file if it exists
if [ -f .env ]; then
  echo -e "${GREEN}Loading environment variables from .env file...${NC}"
  export $(cat .env | grep -v '^#' | xargs)
fi

# Check required environment variables
if [ -z "$S3_BUCKET" ]; then
  echo -e "${RED}Error: S3_BUCKET environment variable is not set${NC}"
  echo "Please set it in .env file or export it: export S3_BUCKET=your-bucket-name"
  exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo -e "${RED}Error: CLOUDFRONT_DISTRIBUTION_ID environment variable is not set${NC}"
  echo "Please set it in .env file or export it: export CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id"
  exit 1
fi

# AWS Profile (optional, defaults to 'default')
AWS_PROFILE=${AWS_PROFILE:-default}

echo -e "${GREEN}=== StressNavigator Deployment ===${NC}"
echo -e "S3 Bucket: ${YELLOW}$S3_BUCKET${NC}"
echo -e "CloudFront Distribution: ${YELLOW}$CLOUDFRONT_DISTRIBUTION_ID${NC}"
echo -e "AWS Profile: ${YELLOW}$AWS_PROFILE${NC}"
echo ""

# Build the React app
echo -e "${GREEN}Building React application...${NC}"
npm run build

if [ ! -d "dist" ]; then
  echo -e "${RED}Error: Build directory 'dist' not found${NC}"
  exit 1
fi

# Sync to S3
echo -e "${GREEN}Uploading to S3...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET/ \
  --profile $AWS_PROFILE \
  --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "index.html" \
  --exclude "*.html"

# Upload HTML files with different cache settings (no cache for HTML to ensure updates are immediate)
echo -e "${GREEN}Uploading HTML files with no-cache headers...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET/ \
  --profile $AWS_PROFILE \
  --exclude "*" \
  --include "*.html" \
  --cache-control "no-cache, no-store, must-revalidate"

# Create CloudFront invalidation
echo -e "${GREEN}Creating CloudFront invalidation...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --profile $AWS_PROFILE \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo -e "${GREEN}CloudFront invalidation created: ${YELLOW}$INVALIDATION_ID${NC}"
echo -e "${GREEN}Waiting for invalidation to complete...${NC}"

aws cloudfront wait invalidation-completed \
  --profile $AWS_PROFILE \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --id $INVALIDATION_ID

echo -e "${GREEN}=== Deployment Complete ===${NC}"
echo -e "Your website has been successfully deployed!"
echo ""
echo -e "CloudFront URL: ${YELLOW}https://$(aws cloudfront get-distribution --profile $AWS_PROFILE --id $CLOUDFRONT_DISTRIBUTION_ID --query 'Distribution.DomainName' --output text)${NC}"
