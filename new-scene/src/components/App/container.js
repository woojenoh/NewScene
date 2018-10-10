import React, { Component } from "react";
import App from "./presenter";
import Alert from "react-s-alert";

let userIndex = 3;
let postIndex = 6;

export default class container extends Component {
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
        postCount: 2,
        likePosts: ["2"]
      },
      {
        id: "1",
        username: "hyunjoo",
        password: "123456",
        name: "HYUNJOO",
        profilePhoto:
          "http://www.sporbiz.co.kr/news/photo/201804/222816_180822_5132.jpg",
        message: "안녕!",
        postCount: 2,
        likePosts: ["0", "4"]
      },
      {
        id: "2",
        username: "wjnoh",
        password: "123456",
        name: "WOOJE",
        profilePhoto:
          "http://cphoto.asiae.co.kr/listimglink/6/2018011516074750720_1516000066.jpg",
        message: "안녕하세요!",
        postCount: 2,
        likePosts: ["0"]
      }
    ],
    posts: [
      {
        id: "0",
        userId: "0",
        movieId: "1",
        photo:
          "https://scontent-atl3-1.cdninstagram.com/vp/fc550259ae8484d90feddd6ee019f2cd/5BC5968E/t51.2885-15/e35/17881542_723982161114288_5150746053783322624_n.jpg",
        message: "멋지네요!",
        like: 2
      },
      {
        id: "1",
        userId: "1",
        movieId: "0",
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
        like: 1
      },
      {
        id: "3",
        userId: "1",
        movieId: "2",
        photo:
          "http://ph.cctoday.co.kr/news/photo/201712/1104332_425551_1106.jpg",
        message: "드론!",
        like: 0
      },
      {
        id: "4",
        userId: "0",
        movieId: "0",
        photo: "https://pbs.twimg.com/media/CgUxrYTUIAEJGyS.jpg",
        message: "정우성 존잘...",
        like: 1
      },
      {
        id: "5",
        userId: "2",
        movieId: "1",
        photo:
          "http://mblogthumb4.phinf.naver.net/20120930_107/love_ly_lsy_1349014465789eJWrE_PNG/ggg.PNG?type=w2",
        message: "야경도 멋지다!",
        like: 0
      }
    ],
    movies: [
      {
        id: "0",
        title: "더 킹",
        location: "대전 유성구 대학로 99",
        geo: [36.3679381, 127.3442986],
        poster:
          "https://movie-phinf.pstatic.net/20170118_172/1484704779507T3ahF_JPEG/movie_image.jpg",
        photos: [
          "https://t1.daumcdn.net/cfile/tistory/2613984958900F1930",
          "https://image.ytn.co.kr/general/jpg/2016/0223/201602231643101236_d.jpg",
          "https://scontent-bru2-1.cdninstagram.com/vp/f90a95746ed039b853a7392ae82e5fc0/5C1E820D/t51.2885-15/e35/c108.0.434.434/16124372_615377875317081_8521675063311728640_n.jpg"
        ],
        squarePhoto:
          "http://mblogthumb2.phinf.naver.net/MjAxNzAxMjdfMTQ4/MDAxNDg1NTI3OTk2OTIw.HCCQfmlqU274f7Qxbp_Lgs_6VvreuFuExlwhLeM2xCAg.rFsddZTSgd63va3UP_DgN3j3TaedLMp86uzs4DlXAkUg.JPEG.yourh0use_/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-1.jpg?type=w800",
        link: "http://naver.me/GRSjg2hZ"
      },
      {
        id: "1",
        title: "도둑들",
        location: "대전 동구 대학로 62",
        geo: [36.3353628, 127.45879059999993],
        poster:
          "https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg",
        photos: [
          "https://post-phinf.pstatic.net/MjAxNzEwMTlfMTAw/MDAxNTA4Mzc5MjE3Nzg5.pcsnULBapjJcpJZCJTcKbmUJhXX9H48NVYGhO9mvPo4g.cTuqMzfUteA5IEHrUq5h880fUI4v4A3vcYoYB0OhiyIg.PNG/%EA%B7%B8%EB%A6%BC17.png?type=w1200",
          "http://www.daejonilbo.com/admin/news/news_photo/oImg/2013/05/17/2013051801001162500000004.jpg?r_key=6647546855"
        ],
        squarePhoto:
          "http://cdnimg.melon.co.kr/cm/album/images/021/38/684/2138684_500.jpg/melon/quality/80/optimize",
        link: "http://naver.me/GOjz2sQ6"
      },
      {
        id: "2",
        title: "쎄시봉",
        location: "대전 대덕구 한남로 70",
        geo: [36.3544294, 127.42272969999999],
        poster:
          "https://movie-phinf.pstatic.net/20150128_263/1422410206018A2rmx_JPEG/movie_image.jpg",
        photos: [
          "http://uniboard.hannam.ac.kr/whtml/editorimg/2015/02/20275_20150210152836_14235497163941.jpg",
          "http://uniboard.hannam.ac.kr/whtml/editorimg/2015/02/20275_20150210152823_14235497038261.jpg"
        ],
        squarePhoto:
          "http://nthumb.cyworld.com/thumb?width=300&height=300&url=http%3A%2F%2Fc2down.cyworld.co.kr%2Fdownload%3Ffid%3D64224afceecbb252ec124b4eeecba970%26name%3D1.jpg",
        link: "http://naver.me/Fxj9cQr6"
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
      Alert.error("아이디나 비밀번호가 일치하지 않습니다.", {
        position: "bottom",
        effect: "stackslide",
        beep: false,
        timeout: 5000
      });
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
      Alert.error("이미 존재하는 아이디입니다.", {
        position: "bottom",
        effect: "stackslide",
        beep: false,
        timeout: 5000
      });
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
    return (
      <App
        {...this.state}
        {...this.props}
        getUser={this.getUser}
        getMovie={this.getMovie}
        handleUpload={this.handleUpload}
        handleProfileUpdate={this.handleProfileUpdate}
        handleLogin={this.handleLogin}
        handleSignup={this.handleSignup}
        handleLike={this.handleLike}
        handleUnlike={this.handleUnlike}
        handleLogout={this.handleLogout}
      />
    );
  }
}
