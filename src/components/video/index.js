// react
import { useState, useEffect } from "react";

// style
import { Container } from "./style";
import { itemVariants } from "../../styles/global";
import { motion } from "framer-motion";

// components
import YouTube from "react-youtube";

export const Video = ({ height, width, url, ...rest }) => {
  useEffect(() => {
    setVideoId(takeVideoId(url));
  }, [url]);

  const takeVideoId = (url) => {
    return url.split("/").reverse()[0];
  };
  const [videoId, setVideoId] = useState(takeVideoId(url));

  return (
    <Container className="box-video" height={height} width={width} {...rest}>
      <motion.div variants={itemVariants}>
        <YouTube videoId={videoId} />
      </motion.div>
    </Container>
  );
};
