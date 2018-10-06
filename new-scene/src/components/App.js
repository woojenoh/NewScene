import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Feed from "./Feed";
import MyPage from "./MyPage";
import Auth from "./Auth";
import Movie from "./Movie";

let userIndex = 3;
let postIndex = 3;

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
        likePosts: []
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
        likePosts: []
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
        likePosts: []
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
        like: 0
      },
      {
        id: "1",
        userId: "1",
        movieId: "1",
        photo: "http://www.itdaily.kr/news/photo/201503/61286_67165_3835.jpg",
        message: "지금은 공사 중이에요 ㅜㅜ",
        like: 0
      },
      {
        id: "2",
        userId: "2",
        movieId: "2",
        photo:
          "http://uniboard.hannam.ac.kr/whtml/editorimg/2015/02/20275_20150210152823_14235497038261.jpg",
        message: "푸릇푸릇하네요 :D",
        like: 0
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
      },
      {
        id: "2",
        title: "쎄시봉",
        location: "대전광역시 대덕구 한남로 70",
        poster:
          "https://movie-phinf.pstatic.net/20150128_263/1422410206018A2rmx_JPEG/movie_image.jpg",
        photos: ["", "", ""]
      }
    ]
  };

  getUser = userId => {
    const { users } = this.state;
    const targetUser = users.filter(user => {
      return user.id === userId;
    });
    return targetUser[0];
  };

  getMovie = movieId => {
    const { movies } = this.state;
    const targetMovie = movies.filter(movie => {
      return movie.id === movieId;
    });
    return targetMovie[0];
  };

  handleUpload = data => {
    const { currentUserId, users, posts } = this.state;
    this.setState({
      posts: posts.concat({ id: postIndex++ + "", ...data }),
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

  handleLogin = data => {
    const { users } = this.state;
    const targetUser = users.filter(user => {
      return user.username === data.username && user.password === data.password;
    });
    if (targetUser[0] === undefined) {
      alert("아이디나 비밀번호가 일치하지 않습니다.");
    } else {
      this.setState({
        currentUserId: targetUser[0].id
      });
    }
  };

  handleSignup = data => {
    const { users } = this.state;
    const targetUser = users.filter(user => {
      return user.username === data.username;
    });
    if (targetUser[0] !== undefined) {
      alert("이미 존재하는 아이디입니다.");
    } else {
      this.setState({
        users: users.concat({
          id: userIndex + "",
          username: data.username,
          name: data.name,
          password: data.password,
          profilePhoto: "http://mirkino.tv/article/pic/ava/0.jpg",
          message: "자신을 소개해주세요.",
          postCount: 0,
          likePosts: []
        }),
        currentUserId: userIndex++ + ""
      });
    }
  };

  handleLike = postId => {
    const { currentUserId, users, posts } = this.state;
    this.setState({
      users: users.map(
        user =>
          user.id === currentUserId
            ? {
                ...user,
                likePosts: this.state.users[currentUserId].likePosts.concat(
                  postId + ""
                )
              }
            : user
      ),
      posts: posts.map(
        post =>
          post.id === postId
            ? {
                ...post,
                like: this.state.posts[postId].like + 1
              }
            : post
      )
    });
  };

  handleUnlike = postId => {
    const { currentUserId, users, posts } = this.state;
    this.setState({
      users: users.map(
        user =>
          user.id === currentUserId
            ? {
                ...user,
                likePosts: this.state.users[currentUserId].likePosts.filter(
                  id => {
                    return id !== postId;
                  }
                )
              }
            : user
      ),
      posts: posts.map(
        post =>
          post.id === postId
            ? {
                ...post,
                like: this.state.posts[postId].like - 1
              }
            : post
      )
    });
  };

  handleLogout = () => {
    this.setState({
      currentUserId: null
    });
  };

  render() {
    const { currentUserId, posts, movies } = this.state;

    const PublicRoutes = () => {
      return (
        <main className="main main--login">
          <Route
            path="/"
            render={() => (
              <Auth
                handleLogin={this.handleLogin}
                handleSignup={this.handleSignup}
              />
            )}
          />
        </main>
      );
    };

    const PrivateRoutes = () => {
      return (
        <div className="App">
          <Navigation
            user={this.getUser(currentUserId)}
            posts={posts}
            movies={movies}
            handleUpload={this.handleUpload}
            handleLogout={this.handleLogout}
          />
          <main className="main">
            <Route
              exact
              path="/"
              render={() => (
                <Feed
                  currentUser={this.getUser(currentUserId)}
                  posts={posts}
                  getUser={this.getUser}
                  getMovie={this.getMovie}
                  handleLike={this.handleLike}
                  handleUnlike={this.handleUnlike}
                />
              )}
            />
            <Route
              path="/mypage"
              render={() => (
                <MyPage
                  currentUser={this.getUser(currentUserId)}
                  posts={posts}
                  getUser={this.getUser}
                  getMovie={this.getMovie}
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
    };

    return currentUserId === null ? PublicRoutes() : PrivateRoutes();
  }
}

export default App;
