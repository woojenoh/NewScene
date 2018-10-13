import React, { Component } from "react";
import App from "./presenter";
import Alert from "react-s-alert";

let userIndex = 3;
let postIndex = 6;

export default class container extends Component {
  state = {
    currentUserId: null,
    users: [
      {
        id: "0",
        username: "juseong",
        password: "123456",
        name: "JuSeoung",
        profilePhoto:
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1bf2e19546.png",
        message: "안녕!",
        postCount: 3,
        likePosts: ["2", "7", "8", "10"]
      },
      {
        id: "1",
        username: "syj1198",
        password: "123456",
        name: "YeonJu",
        profilePhoto:
          "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1bf6e44aef.jpg",
        message: "호롤로!",
        postCount: 4,
        likePosts: ["0", "4", "9", "10"]
      },
      {
        id: "2",
        username: "wjnoh",
        password: "123456",
        name: "WOOJE",
        profilePhoto:
          "http://cphoto.asiae.co.kr/listimglink/6/2018011516074750720_1516000066.jpg",
        message: "안녕하세요!",
        postCount: 4,
        likePosts: ["0", "7", "8"]
      },
      {
        id: "3",
        username: "minju",
        password: "123456",
        name: "MinJuBack",
        profilePhoto:
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1bfb6be771.gif",
        message: "안녕안녕!",
        postCount: 0,
        likePosts: ["7", "10"]
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
      },
      {
        id: "6",
        userId: "0",
        movieId: "0",
        photo:
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1be2fc54e4.gif",
        message: "가을이라 쌀쌀쌀하네요, 그래도 멋있어요!",
        like: 0
      },
      {
        id: "7",
        userId: "1",
        movieId: "2",
        photo:
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1be4b1091a.gif",
        message:
          "대전대학교 30주년 기념관 꼭대기층에서 찍었어요. 화면이랑 맞추려다보니까 영화장면을 확대했어요.",
        like: 3
      },
      {
        id: "8",
        userId: "1",
        movieId: "2",
        photo:
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1be4e3112f.gif",
        message:
          "대전대학교 30주년기념관. 여기서 진짜 영화며 드라마 많이 촬영했더라고요!",
        like: 2
      },
      {
        id: "9",
        userId: "2",
        movieId: "3",
        photo:
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1be9234082.gif",
        message: "구충남도청이에요...조금 무섭네요...",
        like: 1
      },
      {
        id: "10",
        userId: "2",
        movieId: "5",
        photo:
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c643536e1.jpg",
        message: "2018.10.9. 한글날, 한남대에서 루루루루룰ㄹ",
        like: 3
      }
    ],
    movies: [
      {
        id: "0",
        title: "노브레싱",
        location: "대전 동구 용운동 41",
        geo: [36.336245, 127.46275560000004],
        poster:
          "https://movie-phinf.pstatic.net/20131016_222/1381901252802i9oCI_JPEG/movie_image.jpg",
        photos: [
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c1a9ed78a.png",
          "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c1adb78a1.png",
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c1b2265e1.png"
        ],
        squarePhoto:
          "http://cdnimg.melon.co.kr/cm/album/images/022/11/838/2211838_500.jpg/melon/quality/80/optimize",
        link: "http://naver.me/GZqs2DVv"
      },
      {
        id: "1",
        title: "더 킹",
        location: "대전 유성구 궁동 220",
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
        id: "2",
        title: "도둑들",
        location: "대전 동구 용운동 96-3",
        geo: [36.3351678, 127.46050400000001],
        poster:
          "https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg",
        photos: [
          "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c1cddf287.png",
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c1d3a78e7.png"
        ],
        squarePhoto:
          "http://cdnimg.melon.co.kr/cm/album/images/021/38/684/2138684_500.jpg/melon/quality/80/optimize",
        link: "http://naver.me/GsePgRJq"
      },
      {
        id: "3",
        title: "변호인",
        location: "대전 중구 선화동 287-2",
        geo: [36.3268502, 127.41991699999994],
        poster:
          "https://movie-phinf.pstatic.net/20131203_145/1386034788519v2Vwy_JPEG/movie_image.jpg",
        photos: [
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c209623bc.png",
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c20d39056.png",
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c211073df.png"
        ],
        squarePhoto:
          "https://pds.joins.com/news/component/newsis/201403/14/NISI20140314_0009464208_web.jpg",
        link: "http://naver.me/xE2ujK5R"
      },
      {
        id: "4",
        title: "살인자의 기억법",
        location: "대전 대덕구 오정동 133-2번지",
        geo: [36.3544262, 127.42272739999999],
        poster:
          "https://movie-phinf.pstatic.net/20171030_272/1509348877448FqDsF_JPEG/movie_image.jpg",
        photos: [
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c229171bd.png",
          "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c22c2dd4d.png"
        ],
        squarePhoto:
          "https://image.bugsm.co.kr/album/images/500/201182/20118227.jpg",
        link: "http://naver.me/xVsA7FGL"
      },
      {
        id: "5",
        title: "쎄시봉",
        location: "대전 대덕구 오정동 133",
        geo: [36.3544548, 127.42304459999993],
        poster:
          "https://movie-phinf.pstatic.net/20150128_263/1422410206018A2rmx_JPEG/movie_image.jpg",
        photos: [
          "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c2375e85c.png",
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c23b65a41.png"
        ],
        squarePhoto:
          "http://cdnimg.melon.co.kr/cm/album/images/023/03/104/2303104_500.jpg?62da2f5c312ed9410127412ed5a4e0eb/melon/quality/80/optimize",
        link: "http://naver.me/xVsA7FGL"
      },
      {
        id: "6",
        title: "옥자",
        location: "대전 동구 대동 165",
        geo: [36.3294157, 127.4429586],
        poster: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=143435#",
        photos: [
          "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPmfvl-ILeAhUB7LwKHWj2DCoQjRx6BAgBEAU&url=http%3A%2F%2Fextmovie.maxmovie.com%2Fxe%2F21198011&psig=AOvVaw2CvNcopqZDbCG_sEXRxLHR&ust=1539503819679496",
          "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj6kpTw-ILeAhVK6bwKHU5xDEkQjRx6BAgBEAU&url=http%3A%2F%2Fextmovie.maxmovie.com%2Fxe%2F21198011&psig=AOvVaw2CvNcopqZDbCG_sEXRxLHR&ust=1539503819679496"
        ],
        squarePhoto:
          "https://post-phinf.pstatic.net/MjAxNzA4MTBfMTE5/MDAxNTAyMzUwMDMxOTI3.N3TfVChHbJYonsuLhisbMyO8q0EdVndBUBAWGDk_tWIg.lGSEYoh_wFqEX0q-yuPS_NPGltn596dTQ2kjGcdP4LIg.JPEG/IEyVs-2izXDhMtLn5gwpk8Ye5St8.jpg?type=fb500_500",
        link: "http://naver.me/xBGsFNHX"
      },
      {
        id: "7",
        title: "코리아",
        location: "대전 대덕구 오정동 종합운동장",
        geo: [36.3544548, 127.42114459999993],
        poster:
          "https://movie-phinf.pstatic.net/20120515_187/1337071991340NIfrE_JPEG/movie_image.jpg",
        photos: [
          "http://pds25.egloos.com/pds/201810/13/70/c0116970_5bc1c24c70cd3.png",
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c250e8b37.png",
          "http://pds21.egloos.com/pds/201810/13/70/c0116970_5bc1c2520471d.png"
        ],
        squarePhoto: "https://t1.daumcdn.net/cfile/tistory/20364D455037730E2E",
        link: "http://naver.me/xsA8bMNl"
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
