FROM nginx:alpine
COPY . /usr/share/nginx/html

COPY nginx/default.template /etc/nginx/conf.d/default.template

# Substitute the environment variables and generate the final config
CMD envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'

