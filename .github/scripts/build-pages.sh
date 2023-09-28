#!/bin/bash
set -x

# Install Miniforge
wget -qO- https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh | bash
source ~/miniforge3/bin/activate

# Install Mamba
conda install mamba -c conda-forge

mamba create -n rmarkdown
conda activate rmarkdown

mamba install -c conda-forge r-base r-rmarkdown r-flextable r-officer pandoc

pwd ls -lah

#######################
# BUILD DOCUMENTATION #
#######################

Rscript -e "rmarkdown::render_site()"