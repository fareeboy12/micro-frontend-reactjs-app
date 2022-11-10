import React from "react";
import Offline from "./Offline";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return(
        <>
            <Offline name={this.props.name}/>
        </>
      );
    }

    return this.props.children;
  }
}