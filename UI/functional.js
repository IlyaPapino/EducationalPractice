const test = (function () {
  const photoPosts = [
    {
      id: '1',
      description: 'cats :)',
      creationDate: new Date('2019-01-07T23:59:59'),
      author: 'Alex',
      photoLink: 'http://cats.png',
      likes: ['Vadim'],
      hashTags: ['#funny', 'cats'],
    },

    {
      id: '3',
      description: 'SpaceX',
      creationDate: new Date('2005-02-20T23:00:00'),
      author: 'Alex',
      photoLink: '',
      likes: ['Alex', 'Sidorov'],
      hashTags: ['#space', '#ElonMusk'],
    },

    {
      id: '2',
      description: 'I love Python!!!!!!!',
      creationDate: new Date('2018-02-20T23:00:00'),
      author: 'Dima',
      photoLink: 'https://qph.fs.quoracdn.net/main-qimg-5bcd0509a8c32a59e5d362c1ed531f19',
      likes: ['Vadim', 'Alex'],
      hashTags: [],
    },

    {
      id: '4',
      description: 'ASD!!!! 9/32',
      creationDate: new Date('2019-03-10T12:37:12'),
      author: 'Nekit',
      photoLink: 'https://acm.bsu.by/courses/89/problems/890/1.png',
      likes: ['Alex', 'Vadim', 'Fronter'],
      hashTags: ['#ASD', '#algorithms', 'structure', 'data'],
    },

    {
      id: '5',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '6',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '7',
      description: 'dOgS ))))))))',
      creationDate: new Date('2019-01-20T13:02:29'),
      author: 'Sanya',
      photoLink: 'https://prosobachku.ru/wp-content/uploads/2017/04/harakter-djek-rasel-terier.jpg',
      likes: [],
      hashTags: ['animals', '#dog'],
    },

    {
      id: '8',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '9',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '10',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '11',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '12',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '13',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '14',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '15',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '16',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '17',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '77',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '18',
      description: 'nature',
      creationDate: new Date('2017-05-20T00:00:00'),
      author: 'Natalia',
      photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
      likes: ['Alex', 'Aleksandra'],
      hashTags: ['#nature'],
    },

    {
      id: '404',
      description: 'Rick Sanchez',
      creationDate: new Date('2013-12-25T15:04:24'),
      author: 'Pavel',
      photoLink: 'https://www.clipartmax.com/png/middle/194-1947759_rick-sanchez-morty-smith-drawing-deviantart-rick-and-morty-vector.png',
      likes: [],
      hashTags: [],
    },
  ];

  return {
    getPhotoPost(id) {
      const realId = Number.parseInt(id);
      if (this.checkId(realId)) {
        const foundPost = photoPosts.filter(post => parseInt(post.id) === realId);
        if (this.checkObject(foundPost[0])) {
          return foundPost[0];
        }

        return null;
      }
    },

    getPhotoPosts(skip, top, filterConfig) {
      skip = skip || 0;
      top = top || 10;
      filterConfig = filterConfig || null;
      let foundPosts = photoPosts.sort((post1, post2) => post1.creationDate - post2.creationDate);
      if (filterConfig) {
        if (filterConfig.hasOwnProperty('author')) {
          foundPosts = foundPosts.filter(post => post.author === filterConfig.author);
        } else if (filterConfig.hasOwnProperty('hashTags')) {
          if (filterConfig.hashTags.length !== 0) {
            foundPosts = foundPosts.filter((post) => {
              for (let i = 0; i < filterConfig.hashTags.length; i++) {
                for (let j = 0; j < post.hashTags.length; j++) {
                  if (post.hashTags[j] === filterConfig.hashTags[i]) {
                    return true;
                  }
                }
              }
              return false;
            });
          }
        }
      }
      foundPosts = foundPosts.slice(skip, skip + top);
      if (this.checkObject(foundPosts) && foundPosts.length !== 0) {
        return foundPosts;
      }

      return null;
    },

    validatePhotoPost(post) {
      if (this.checkObject(post) && this.checkObject(post.id)
                && this.checkObject(post.description) && this.checkObject(post.creationDate)
                && this.checkObject(post.author) && this.checkObject(post.photoLink)
                && this.checkObject(post.likes) && this.checkObject(post.hashTags)) {
        if (this.checkString(post.id) && this.checkString(post.description)
                    && this.checkDate(post.creationDate) && post.description.length < 200) {
          if (this.checkId(post.id) && !this.isEmpty(post.author)
                        && !this.isEmpty(post.photoLink)) {
            if (this.checkString(post.author) && this.checkString(post.photoLink)) {
              let checkLikes = false;
              let checkHashTags = false;
              if (post.likes.length !== 0) {
                checkLikes = post.likes.every(function (author) {
                  return this.checkString(author);
                }, this);
              } else {
                checkLikes = true;
              }

              if (post.hashTags.length !== 0) {
                checkHashTags = post.hashTags.every(function (hashtag) {
                  if (hashtag.charAt(0) !== '#') {
                    return false;
                  }
                  return this.checkString(hashtag);
                }, this);
              } else {
                checkHashTags = true;
              }

              return !(!checkLikes || !checkHashTags);
            }
          }
        }
      }
      return false;
    },

    addPhotoPost(post) {
      if (!this.getPhotoPost(post.id) && this.validatePhotoPost(post)) {
        photoPosts.push(post);
        return true;
      }

      return false;
    },

    editPhotoPost(id, post) {
      if (!this.getPhotoPost(id)) {
        return false;
      }
      if (!this.checkId(id)) {
        console.log('Incorrect id!');
        return false;
      }
      if (this.checkObject(post.photoLink)) {
        if (this.checkString(post.photoLink) && !this.isEmpty(post.photoLink)) this.getPhotoPost(id).photoLink = post.photoLink;
        else {
          console.log('Incorrect link!');
          return false;
        }
      }

      if (this.checkObject(post.description)) {
        if (this.checkString(post.description) && !this.isEmpty(post.description) && post.description.length < 200) this.getPhotoPost(id).description = post.description;
        else {
          console.log('Incorrect description!');
          return false;
        }
      }
      let checkHashTags = false;
      if (this.checkObject(post.hashTags)) {
        checkHashTags = post.hashTags.every(function (hashtag) {
          if (hashtag.charAt(0) !== '#') {
            return false;
          }
          return this.checkString(hashtag);
        }, this);
      }
      if (checkHashTags) {
        this.getPhotoPost(id).hashTags = post.hashTags;
        this.getPhotoPost(id).likes = []; // Обнуляем лайки
        return true;
      }
      return false;
    },

    removePhotoPost(id) {
      const delPost = this.getPhotoPost(id);
      if (delPost) {
        const delIndex = photoPosts.indexOf(delPost);
        photoPosts.splice(delIndex, delIndex);
        return true;
      }

      return false;
    },

    checkString(someString) {
      return typeof someString === 'string';
    },

    checkDate(date) {
      if (date instanceof Date) {
        return true;
      }
      const regDate = /^\d{4}-\d{1,2}-\d{1,2}(T[0-2][0-9]:[0-5][0-9]:[0-5][0-9])*$/;
      if (!regDate.test(date.toString())) {
        return false;
      }
      const partsDate = date.split('-');
      const realDate = new Date(date);
      return partsDate[0] === realDate.getFullYear().toString()
                && partsDate[1] - 1 === realDate.getMonth().toString()
                && partsDate[2] === realDate.getDate().toString();
    },

    checkId(id) {
      return /^\d+$/.test(id);
    },

    checkObject(post) {
      return !!post;
    },

    isEmpty(someString) {
      return !someString.trim();
    },
  };
}());
const testPost = {
  id: '1',
  description: 'Привет!',
  creationDate: new Date(),
  author: 'Alex',
  photoLink: 'http://hello.by//helloWorld.png',
  likes: [],
  hashTags: [],
};
if (!test.getPhotoPost(404)) console.log('Post not found...');
else {
  console.log('Post: ');
  console.log(test.getPhotoPost(404));
}
if (test.validatePhotoPost({ id: 3, author: 'CoolDog', photoLink: 'http://vk.com//logo.jpg' })) console.log('Post valid');
else console.log('Post invalid');
if (test.addPhotoPost(testPost)) {
  console.log('Post added');
} else {
  console.log('Post invalid');
}
if (test.editPhotoPost(5, { photoLink: 'https://nature.ru//nature.jpg', hashTags: ['#ILoveNature'] })) {
  console.log('Post changed');
} else {
  console.log('Post change failed');
}
if (test.removePhotoPost(3)) {
  console.log('Post deleted');
} else {
  console.log('Post not found...');
}
if (test.getPhotoPosts(0, 20, { hashTags: ['#ASD', '#dog'] })) {
  console.log(test.getPhotoPosts(0, 20, { hashTags: ['#ASD', '#dog'] }));
} else {
  console.log('Posts not found...');
}
console.log('All posts: ');
console.log(test.getPhotoPosts(0, 20));
