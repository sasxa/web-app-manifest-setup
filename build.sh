project=$1
shift

mkdir -p public/$project

cp src/assets/* public/$project/

cp src/index.html public/$project/
cp src/sw.js public/$project/

echo $(cat <<- EOM
{
  "name": "site-webmanifest-name",
  "short_name": "site-webmanifest-short_name",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#B86ED2",
  "background_color": "#2BD50B",
  "display": "$project"
}
EOM
) >> public/$project/site.webmanifest