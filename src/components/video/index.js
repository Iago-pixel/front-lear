// react
import { useState, useEffect } from "react";

// style
import { Container } from "./style";
import { motion } from "framer-motion";
import { itemVariants } from "../../styles/global";

// components
import YouTube from "react-youtube";

// responsibility
import { mediaQueries } from "./media";
const MediaContainer = mediaQueries(Container);

export const Video = ({ url, ...rest }) => {
  const takeVideoId = (url) => {
    return url.split("/").reverse()[0];
  };

  const [videoId, setVideoId] = useState(takeVideoId(url));

  useEffect(() => {
    setVideoId(takeVideoId(url));
  }, [url]);

  return (
    <motion.div variants={itemVariants}>
      <MediaContainer>
        <Container {...rest}>
          <YouTube videoId={videoId} />
        </Container>
      </MediaContainer>
    </motion.div>
  );
};
