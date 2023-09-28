#!/bin/bash
set -x

sudo apt-get update
sudo apt install -y software-properties-common
sudo apt-add-repository -y ppa:marutter/rrutter4.0
sudo apt update
sudo apt-get -y install r-base


pwd ls -lah
sudo Rscript -e "install.packages(c('rmarkdown', 'flextable', 'officer'))"

# If you're rendering to PDF, you can install tinytex:
sudo Rscript -e "install.packages('tinytex')"
sudo Rscript -e "tinytex::install_tinytex()"

#######################
# BUILD DOCUMENTATION #
#######################

Rscript -e "rmarkdown::render_site()"