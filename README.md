# OpenGitOps Website
<!-- markdownlint-disable MD033 -->
<p><img src="https://raw.githubusercontent.com/cncf/artwork/master/projects/opengitops/icon/color/opengitops-icon-color.svg" alt="OpenGitOps logo icon color" width="150" valign="middle">
<img src="https://openmoji.org/data/color/svg/1F310.svg" alt="Globe with Meridians emoji Unicode 1F310. OpenMoji CC BY-SA 4.0" width="150" valign="middle"></p>

Code for CNCF OpenGitOps project website.

**👩‍💻 Local Development.**

```shell
# if you like npm 
npm i
npm start

# Or if you like yarn
yarn install
yarn start
```

**Docker setup**
```shell
# Build container image from local filesystem with default Node version
docker build --no-cache -t website:<tag> -f Containerfile .

# Build container image from local filesystem with Node version as build arg
docker build --build-arg NODE_VERSION=19 --no-cache -t website:<tag> -f Containerfile .

# Run container image with mapping port 80 on your computer
docker run -dit -p 8000:8000 website:<tag>
```
