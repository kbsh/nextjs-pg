import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { Auth } from '@interfaces/auth';
import { Menu, MenuItem, SwipeableDrawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Path, routes } from '@utils/routes';

import ConfirmModal from './ConfirmModal';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    marginVertical: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    marginHorizontal: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
);

interface Props {
  children: ReactNode;
  user: Auth;
}

export default function HeaderAndMenu({ children, user }: Props) {
  const classes = useStyles();

  // メニューstate
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  // プロフィールメニューstate
  const [profileAnchorEl, setProfileAnchorEl] = React.useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);
  // ログアウト確認モーダルstate
  const router = useRouter();
  const [isLogoutOpen, setLogoutOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleProdileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProdileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogoutOpen = () => {
    setLogoutOpen(true);
    handleProdileMenuClose();
  };
  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  const handlePasswordChange = () => {
    // TODO パスワード変更呼び出し

    handleProdileMenuClose();
  };

  const handleLogout = () => {
    router.push(Path.APILogout);
  };

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Persistent drawer
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProdileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* メニュー */}
      <SwipeableDrawer open={isMenuOpen} onOpen={handleMenuOpen} onClose={handleMenuClose}>
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.list}>
          {routes.map((route, index) => (
            <Link href={route.href} key={index}>
              <ListItem button onClick={handleMenuClose}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>

      {/* プロフィールメニュー */}
      <Menu
        id="profile-menu"
        anchorEl={profileAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={isProfileMenuOpen}
        onClose={handleProdileMenuClose}
      >
        <div className={clsx(classes.marginVertical, classes.marginHorizontal)}>
          Signed in as
          <Typography variant="h6" gutterBottom>
            {user.name}
          </Typography>
        </div>
        <Divider className={classes.marginVertical} />
        <MenuItem onClick={handlePasswordChange}>パスワード変更</MenuItem>
        <MenuItem onClick={handleLogoutOpen}>ログアウト</MenuItem>
      </Menu>

      {/* 確認モーダル */}
      <ConfirmModal
        open={isLogoutOpen}
        title={'ログアウト確認'}
        message={'ログアウトしてよろしいですか？'}
        handleClose={handleLogoutClose}
        handleExec={handleLogout}
      />

      {/* メインコンテンツ */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </React.Fragment>
  );
}
