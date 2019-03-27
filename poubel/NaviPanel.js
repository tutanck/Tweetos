let x;
if (!this.props.isConnected && !this.props.want && !this.props.Wchangemdp) {
    x = <Login
        connect={this.props.login}
        sign={this.props.signin}
        change={this.props.changemdp} />;
}
else if (!this.props.isConnected && this.props.want) {
    x = <Signin sign={this.props.signin} />
}
else if (!this.props.isConnected && this.props.Wchangemdp) {
    x = <NewPassW change={this.props.changemdp} />
}
else {
    x = <Logout deconnect={this.props.logout} />;
}

/*<nav>
                {x}
            </nav>*/