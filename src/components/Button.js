import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button
				onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }
				style={{
					width: 200,
					height: 200,
					fontSize: 50,
					borderRadius: 25,
					}}>
				Refresh
			</button>
		);
	}
}
