project=$1
shift

mkdir -p public/$project

cp src/assets/* public/$project/

cp src/index.html public/$project/
cp src/sw.js public/$project/
cp src/_redirects public/$project/
cp src/webmanifest-$project.webmanifest public/$project/site.webmanifest
