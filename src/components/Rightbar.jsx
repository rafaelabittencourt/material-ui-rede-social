import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "relative",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  }
}));

const Rightbar = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
        Online Friends
        </Typography>
        <AvatarGroup max={6} style={{ marginBottom: 20 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
        Gallery
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://s.studiobinder.com/wp-content/uploads/2021/02/Photographer-aesthetic-with-shadows.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/83/e8/38/83e83806345b0e6d246aa319437c5c65.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/550x/25/5e/57/255e57611ad4a75b2273de60a981416b.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/474x/c0/09/b4/c009b4f99fbbfeaab0375992e3fd6e65.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.thephoblographer.com/wp-content/uploads/2017/04/3045885204_b7205589a9_o.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.dicasdemulher.com.br/wp-content/uploads/2021/06/asthetic-girl.png"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
        Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
        Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
        Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
        Music
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="#" className={classes.link} variant="body2">
        Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
        Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
        Life
        </Link>
      </Container>
    );
  }
  
  export default Rightbar;