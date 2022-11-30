import avatar from '../../assets/image-avatar.png';

import classes from './Avatar.module.scss';

const Avatar = () => {
	return (
		<div className={classes.avatar}>
			<a href="">
				<img src={avatar} alt="avatar" />
			</a>
		</div>
	)
}

export default Avatar;