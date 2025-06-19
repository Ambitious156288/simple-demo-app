import { useState } from "react";
import { Container, Grid, Title } from "@mantine/core";
import type { Comment, Reply } from "./types/commentType";
import { ImageWithComments } from "./components/ImageWithComments/ImageWithComments";
import { CommentList } from "./components/CommentList/CommentList";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const handleAddReply = (commentId: string, reply: Reply) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId ? { ...c, replies: [...c.replies, reply] } : c
      )
    );
  };

  return (
    <Container my="md">
      <Title order={2} mb="md">
        Comment Demo App
      </Title>
      <Grid>
        <ImageWithComments onAddComment={handleAddComment} />
        <CommentList comments={comments} onAddReply={handleAddReply} />
      </Grid>
    </Container>
  );
}

export default App;
