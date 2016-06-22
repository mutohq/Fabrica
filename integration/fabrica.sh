#!/bin/bash
git clone https://github.com/mutohq/Fabrica.git Fabrica-new
rm -r Fabrica

mv Fabrica-new Fabrica
service nginx restart
