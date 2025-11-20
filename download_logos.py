
import os
import requests

LOGOS = {
    "TUM.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg/1200px-Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg.png",
    "LVMH.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/LVMH_Logo.svg/1200px-LVMH_Logo.svg.png",
    "uga.png": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Logo_Universit%C3%A9_Grenoble_Alpes_2020.svg/1200px-Logo_Universit%C3%A9_Grenoble_Alpes_2020.svg.png",
    "Sapienza.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sapienza_University_of_Rome_logo.svg/1200px-Sapienza_University_of_Rome_logo.svg.png",
    "X.png": "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5b/Logo_Polytechnique_2013.svg/1200px-Logo_Polytechnique_2013.svg.png",
    "Harvard.png": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
    "cambridge.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/University_of_Cambridge_logo.svg/1200px-University_of_Cambridge_logo.svg.png",
    "Bloomberg.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bloomberg_L.P._logo.svg/1200px-Bloomberg_L.P._logo.svg.png",
    "GitHub.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
    "LinkedIn.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png",
    "ORCID.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/1200px-ORCID_iD.svg.png",
    "Balzac.png": "https://logo.clearbit.com/lyc-balzac.ac-paris.fr",
    "BonMarche.png": "https://logo.clearbit.com/lebonmarche.com"
}

OUTPUT_DIR = "/Users/karlloyau/Kloyau.github.io-3/assets/logos"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

for filename, url in LOGOS.items():
    filepath = os.path.join(OUTPUT_DIR, filename)
    print(f"Downloading {filename} from {url}...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0'} # Some sites block python-requests
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Successfully downloaded {filename}")
        else:
            print(f"Failed to download {filename}: Status {response.status_code}")
            # Fallback to Clearbit if Wikimedia fails
            if "wikimedia" in url:
                domain_map = {
                    "TUM.png": "tum.de",
                    "LVMH.png": "lvmh.com",
                    "uga.png": "univ-grenoble-alpes.fr",
                    "Sapienza.png": "uniroma1.it",
                    "X.png": "polytechnique.edu",
                    "Harvard.png": "harvard.edu",
                    "cambridge.png": "cam.ac.uk",
                    "Bloomberg.png": "bloomberg.com",
                    "GitHub.png": "github.com",
                    "LinkedIn.png": "linkedin.com",
                    "ORCID.png": "orcid.org"
                }
                if filename in domain_map:
                    fallback_url = f"https://logo.clearbit.com/{domain_map[filename]}"
                    print(f"Retrying with fallback: {fallback_url}")
                    response = requests.get(fallback_url, headers=headers)
                    if response.status_code == 200:
                         with open(filepath, 'wb') as f:
                            f.write(response.content)
                         print(f"Successfully downloaded {filename} from fallback")
                    else:
                        print(f"Fallback failed for {filename}")

    except Exception as e:
        print(f"Error downloading {filename}: {e}")
