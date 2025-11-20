#!/bin/bash

mkdir -p /Users/karlloyau/Kloyau.github.io-3/assets/logos
cd /Users/karlloyau/Kloyau.github.io-3/assets/logos

# Function to download with fallback
download_logo() {
    name=$1
    url=$2
    fallback_domain=$3
    
    echo "Downloading $name..."
    curl -L -o "$name" "$url" -H "User-Agent: Mozilla/5.0"
    
    # Check if file is empty or small (likely failed or 404 page)
    if [ ! -s "$name" ] || [ $(wc -c <"$name") -lt 1000 ]; then
        echo "Primary download failed for $name. Trying fallback..."
        if [ -n "$fallback_domain" ]; then
            curl -L -o "$name" "https://logo.clearbit.com/$fallback_domain"
        fi
    fi
}

download_logo "TUM.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg/1200px-Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg.png" "tum.de"
download_logo "LVMH.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/LVMH_Logo.svg/1200px-LVMH_Logo.svg.png" "lvmh.com"
download_logo "uga.png" "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Logo_Universit%C3%A9_Grenoble_Alpes_2020.svg/1200px-Logo_Universit%C3%A9_Grenoble_Alpes_2020.svg.png" "univ-grenoble-alpes.fr"
download_logo "Sapienza.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sapienza_University_of_Rome_logo.svg/1200px-Sapienza_University_of_Rome_logo.svg.png" "uniroma1.it"
download_logo "X.png" "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5b/Logo_Polytechnique_2013.svg/1200px-Logo_Polytechnique_2013.svg.png" "polytechnique.edu"
download_logo "Harvard.png" "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png" "harvard.edu"
download_logo "cambridge.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/University_of_Cambridge_logo.svg/1200px-University_of_Cambridge_logo.svg.png" "cam.ac.uk"
download_logo "Bloomberg.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bloomberg_L.P._logo.svg/1200px-Bloomberg_L.P._logo.svg.png" "bloomberg.com"
download_logo "GitHub.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" "github.com"
download_logo "LinkedIn.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" "linkedin.com"
download_logo "ORCID.png" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/1200px-ORCID_iD.svg.png" "orcid.org"
download_logo "Balzac.png" "https://logo.clearbit.com/lyc-balzac.ac-paris.fr" ""
download_logo "BonMarche.png" "https://logo.clearbit.com/lebonmarche.com" ""
