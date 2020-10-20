# Stage 1 - the build process
FROM node:11 as builder
# Versions
RUN npm -v
RUN node -v

WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM node:11
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8885", "-s", "."]



