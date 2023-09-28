#!/bin/bash
set -x

# Install Miniforge
wget -qO- https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh | bash

export PATH="$HOME/miniforge3/bin:$PATH"

source ~/miniforge3/bin/activate


# Install Mamba
#conda install -y conda-forge::mamba

conda create -n rmarkdown  -c conda-forge r-base r-rmarkdown r-flextable r-officer pandoc

conda activate rmarkdown

pwd
ls -lah

#######################
# BUILD DOCUMENTATION #
#######################

Rscript -e "rmarkdown::render_site()"