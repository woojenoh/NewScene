import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Feed from "./Feed";
import MyPage from "./MyPage";

class App extends Component {
  state = {
    currentUserId: "2",
    users: [
      {
        id: "0",
        username: "jieun",
        password: "123456",
        name: "JIEUN",
        profilePhoto:
          "http://www.kyeongin.com/mnt/file/201807/20180721000818478_1.jpg",
        message: "안녕!",
        postCount: 1,
        likeCount: 0
      },
      {
        id: "1",
        username: "hyunjoo",
        password: "123456",
        name: "HYUNJOO",
        profilePhoto:
          "http://www.sporbiz.co.kr/news/photo/201804/222816_180822_5132.jpg",
        message: "안녕!",
        postCount: 1,
        likeCount: 0
      },
      {
        id: "2",
        username: "wjnoh",
        password: "123456",
        name: "WOOJE",
        profilePhoto:
          "http://cphoto.asiae.co.kr/listimglink/6/2018011516074750720_1516000066.jpg",
        message: "안녕하세요!",
        postCount: 0,
        likeCount: 0
      }
    ],
    posts: [
      {
        id: "0",
        userId: "0",
        movieId: "0",
        photo:
          "https://scontent-atl3-1.cdninstagram.com/vp/fc550259ae8484d90feddd6ee019f2cd/5BC5968E/t51.2885-15/e35/17881542_723982161114288_5150746053783322624_n.jpg",
        message: "멋지네요!",
        like: "1"
      },
      {
        id: "1",
        userId: "1",
        movieId: "1",
        photo: "http://www.itdaily.kr/news/photo/201503/61286_67165_3835.jpg",
        message: "지금은 공사 중이에요 ㅜㅜ",
        like: "5"
      }
    ],
    movies: [
      {
        id: "0",
        title: "도둑들",
        location: "대전 동구 대학로 62",
        poster:
          "https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg",
        photos: ["", "", ""]
      },
      {
        id: "1",
        title: "더 킹",
        location: "대전광역시 유성구 대학로 99",
        poster:
          "https://movie-phinf.pstatic.net/20170118_172/1484704779507T3ahF_JPEG/movie_image.jpg",
        photos: ["", "", ""]
      }
    ]
  };

  userIndex = 3;
  postIndex = 2;

  getUser = userId => {
    const { users } = this.state;
    const targetUser = users.filter(user => {
      return user.id === userId;
    });
    return targetUser[0];
  };

  handleUpload = data => {
    const { currentUserId, users, posts } = this.state;
    this.setState({
      posts: posts.concat({ id: this.postIndex++, ...data }),
      users: users.map(
        user =>
          user.id === currentUserId
            ? { ...user, postCount: user.postCount + 1 }
            : user
      )
    });
  };

  handleProfileUpdate = data => {
    const { currentUserId, users } = this.state;
    console.log(this.currentUserId);
    this.setState({
      users: users.map(
        user =>
          user.id === currentUserId
            ? {
                ...user,
                ...data
              }
            : user
      )
    });
  };

  render() {
    const { currentUserId, users, posts, movies } = this.state;

    return (
      <div className="App">
        <Navigation
          user={this.getUser(currentUserId)}
          posts={posts}
          movies={movies}
          handleUpload={this.handleUpload}
        />
        <main className="main">
          <Route exact path="/" />
          <Route
            path="/feed"
            render={() => (
              <Feed
                users={users}
                posts={posts}
                movies={movies}
                getUser={this.getUser}
              />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <MyPage
                user={this.getUser(currentUserId)}
                handleProfileUpdate={this.handleProfileUpdate}
              />
            )}
          />
          <Switch>
            <Route path="/movie/:movieId" />
            <Route path="/movie" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
