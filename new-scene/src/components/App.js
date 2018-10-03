import React, { Component } from "react";
import Navigation from "./Navigation";
import FeedPhoto from "./FeedPhoto";

class App extends Component {
  state = {
    posts: [
      {
        id: "1",
        username: "JIEUN",
        profilePhoto:
          "http://www.kyeongin.com/mnt/file/201807/20180721000818478_1.jpg",
        movieId: "1",
        photo:
          "https://scontent-atl3-1.cdninstagram.com/vp/fc550259ae8484d90feddd6ee019f2cd/5BC5968E/t51.2885-15/e35/17881542_723982161114288_5150746053783322624_n.jpg",
        message: "멋지네요!",
        like: "1"
      },
      {
        id: "2",
        username: "HYUNJOO",
        profilePhoto:
          "http://www.sporbiz.co.kr/news/photo/201804/222816_180822_5132.jpg",
        movieId: "2",
        photo: "http://www.itdaily.kr/news/photo/201503/61286_67165_3835.jpg",
        message: "지금은 공사 중이에요 ㅜㅜ",
        like: "5"
      }
    ],
    movies: [
      {
        id: "1",
        title: "도둑들",
        location: "대전 동구 대학로 62"
      },
      {
        id: "2",
        title: "더 킹",
        location: "대전광역시 유성구 대학로 99"
      }
    ]
  };

  render() {
    const { posts, movies } = this.state;

    return (
      <div className="App">
        <Navigation />
        <main className="main">
          <section className="feed">
            {posts.map(post => {
              const movie = movies.filter(movie => {
                return post.movieId === movie.id;
              });
              return (
                <FeedPhoto
                  key={post.id}
                  {...post}
                  title={movie[0].title}
                  location={movie[0].location}
                />
              );
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
