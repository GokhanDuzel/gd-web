const imageContext = require.context("../../images", false, /\.(png|jpg|jpeg)$/);

const images = imageContext.keys().reduce((acc, key) => {
    const imageName = key.replace("./", "");
    acc[imageName] = imageContext(key);
    return acc;
  }, {});

const p1i1 = images["login.png"];
const p1i2 = images["dealerships.png"];
const p1i3 = images["dealership_details.png"];

export const PROJECT_DATA = [
    {   
        id: 1,
        title: 'project 1',
        description: "this is project 1",
        images: [p1i1, p1i2, p1i3],
        githubLink: "https://github.com/GokhanDuzel/GD_CloudAppDevelopment_Capstone",
    },
    {
        id: 2,
        title: 'project 2',
        description: "this is project 2",
        images: [p1i1, p1i2, p1i3],
        githubLink: "https://github.com/GokhanDuzel/GD_CloudAppDevelopment_Capstone",
    },
    {
        id: 3,
        title: 'project 3',
        description: "this is project 3",
        images: [p1i1, p1i2, p1i3],
        githubLink: "https://github.com/GokhanDuzel/GD_CloudAppDevelopment_Capstone",
    },
]