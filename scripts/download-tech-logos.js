const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = {
  'uipath.png': 'https://companieslogo.com/img/orig/PATH-4b7bbf18.png?t=1649160715',
  'powerbi.png': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  'azure.png': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
  'aws.png': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'python.png': 'https://www.python.org/static/community_logos/python-logo-generic.svg',
  'tensorflow.png': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
  'docker.png': 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
  'github.png': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  'gitlab.png': 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg',
  'zapier.png': 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg',
  'jenkins.png': 'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
  'kubernetes.png':
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
};

const downloadImage = (url, filename) => {
  const dir = path.join(process.cwd(), 'public', 'images', 'tech');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, filename);
  const file = fs.createWriteStream(filepath);

  https
    .get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded: ${filename}`);
      });
    })
    .on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`Failed to download ${filename}:`, err.message);
    });
};

Object.entries(logos).forEach(([filename, url]) => {
  downloadImage(url, filename);
});
