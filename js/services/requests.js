const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'Post',
    body: data
  });

  return await response.text();
};

const getData = async (url) => {
  const response = await fetch(url);

  return await response.json();
};

export {postData, getData};
