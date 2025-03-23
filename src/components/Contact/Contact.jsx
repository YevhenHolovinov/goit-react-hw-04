import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';

import css from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.container}>
			<div>
				<div className={css.text}>
					<IoIosContact />
					<span >{name}</span>
				</div>
				<div className={css.text}>
					<MdPhoneInTalk />
					<a href={`tel: ` + number}>{number}</a>
				</div>
			</div>
			<button
				onClick={() => onDelete(id)}
				type='button'
			>
				Delete
			</button>
		</li>
  );
}