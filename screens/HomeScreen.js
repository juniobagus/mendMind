import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Icon } from "expo";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 10 }}
                >
                  <Avatar source={require("../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Hello!</Title>
                <Name>Junio</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {Logos.map((logo, index) => (
                  <Logo image={logo.image} text={logo.text} key={index} />
                ))}
              </ScrollView>

              <Subtitle>Continue Reading</Subtitle>
              <ScrollView
                horizontal={true}
                style={{
                  paddingBottom: 30
                }}
                showsHorizontalScrollIndicator={false}
              >
                {Contents.map((content, index) => (
                  <Card
                    key={index}
                    title={content.title}
                    image={content.image}
                    caption={content.caption}
                    logo={content.logo}
                    subtitle={content.subtitle}
                  />
                ))}
              </ScrollView>
              <Subtitle>Popular Blog</Subtitle>
              {Courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  caption={course.caption}
                  avatar={course.avatar}
                  name={course.name}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 6px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;

const Logos = [
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-vue.png"),
    text: "Vue"
  },
  {
    image: require("../assets/logo-xd.png"),
    text: "Adobe XD"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const Contents = [
  {
    title: "Perkenalan React Native",
    image: require("../assets/background1.jpg"),
    subtitle: "Technology",
    caption: "10 Minutes",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Self Healing",
    image: require("../assets/background2.jpg"),
    subtitle: "Psychology",
    caption: "14 Minutes",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Bantu yang lain dengan membantu dirimu",
    image: require("../assets/background3.jpg"),
    subtitle: "Psychology",
    caption: "3 Minutes",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "PTSD",
    image: require("../assets/background4.jpg"),
    subtitle: "Psychology",
    caption: "4 Minutes",
    logo: require("../assets/logo-react.png")
  }
];

const Courses = [
  {
    title: "Belajar Adobe XD",
    subtitle: "10 Sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-xd.png"),
    name: "Junio",
    avatar: require("../assets/avatar.jpg"),
    caption: "Belajar UI dengan Adobe XD"
  },
  {
    title: "Belajar Adobe XD",
    subtitle: "10 Sections",
    image: require("../assets/background2.jpg"),
    logo: require("../assets/logo-xd.png"),
    name: "Junio",
    avatar: require("../assets/avatar.jpg"),
    caption: "Belajar UI dengan Adobe XD"
  },
  {
    title: "Belajar Adobe XD",
    subtitle: "10 Sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-xd.png"),
    name: "Junio",
    avatar: require("../assets/avatar.jpg"),
    caption: "Belajar UI dengan Adobe XD"
  },
  {
    title: "Belajar Adobe XD",
    subtitle: "10 Sections",
    image: require("../assets/background3.jpg"),
    logo: require("../assets/logo-xd.png"),
    name: "Junio",
    avatar: require("../assets/avatar.jpg"),
    caption: "Belajar UI dengan Adobe XD"
  },
  {
    title: "Belajar Adobe XD",
    subtitle: "10 Sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-xd.png"),
    name: "Junio",
    avatar: require("../assets/avatar.jpg"),
    caption: "Belajar UI dengan Adobe XD"
  }
];
