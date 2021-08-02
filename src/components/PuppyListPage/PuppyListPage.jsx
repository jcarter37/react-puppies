import './PuppyListPage.css';
import PuppyListItem from '../../components/PuppyListItem/PuppyListItem';

function PuppyListPage( {puppies, handleDeletePuppy} ) {
	return (
		<>
			<h1>Puppy List</h1>
			<div className='PuppyListPage-grid'>
				{puppies.map(puppy => (
					<PuppyListItem
						puppy={puppy}
						key={puppy._id}
						handleDeletePuppy={handleDeletePuppy}
					/>
				))}
			</div>
		</>
	);
}

export default PuppyListPage;