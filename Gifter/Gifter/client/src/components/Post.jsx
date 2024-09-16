import { Card, CardImg, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {
  return (
    <Card className="m-4">
            <Link to={`/Users/${post.userProfileId}`} className="navbar-brand">
            Posted by: {post.userProfile?.name}</Link>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <h6>comments:</h6>
{           <ListGroup>
                {post.comments?.map((c) => (
            <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup> }      </CardBody>
    </Card>
  );
};