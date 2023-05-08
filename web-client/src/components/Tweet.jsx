import Cookies from 'js-cookie';
import { Alert, Button, Card } from 'react-bootstrap';
import { deletePost } from '../utils/api';


export default function TweetCard({ content, author, postId }) {
  const handleDelete = async(event) => {
    event.preventDefault();
    await deletePost(postId, Cookies.get('token'));
  };

  return (
    <div className="d-flex justify-content-center align-items-start" >
      <Card className="rounded-3" style={{ maxWidth: '600px', width: '70%', marginTop: '5px', backgroundColor: '#151a21', color: 'white' }}>
      <Button onClick={handleDelete} style={{ maxWidth: '77px', width: '30%', height: '17%', backgroundColor: '#db3939', fontSize: '12px', fontFamily: 'Helvetica', fontWeight: 'bold'}} className="md-auto">
        Delete
      </Button>
        <Card.Body>
          <Card.Title>{content}</Card.Title>
        </Card.Body>
        <div style={{ fontSize: '70%', fontWeight: 'bold', color: '#adadad', margin: '5px'}}>
          {`@${author}`}
        </div>
      </Card>
    </div>
  );
};