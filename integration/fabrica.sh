#!/bin/bash
cd /var/www/Fabrica/
git pull origin master

service nginx restart


# git clone https://github.com/mutohq/Fabrica.git /var/www/Fabrica-new
# rm -r /var/www/Fabrica/

# mv /var/www/Fabrica-new /var/www/Fabrica
