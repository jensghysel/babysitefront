FROM nginx:1.13.12-alpine
COPY ./build /usr/share/nginx/html
EXPOSE 3000 80
CMD ["nginx", "-g", "daemon off;"]