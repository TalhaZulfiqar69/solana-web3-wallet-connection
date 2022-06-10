import React, { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Talha from '../assets/real.png';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  centerStuff: {
    justifyContent: 'center ',
    display: 'flex',
  },
  avatarStuff: {
    height: 100,
    width: 100,
  },

  root: {
    marginTop: 20,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const WalletButton = () => {
  const classes = useStyles();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      console.log({ publicKey });
    }
  }, [publicKey]);
  return (
    <>
      <div className={classes.centerStuff}>
        <Avatar alt='Remy Sharp' src={Talha} className={classes.avatarStuff} />
      </div>
      <h1>Welcome to Solana Wallet Connection</h1>
      <div className={classes.centerStuff}>
        <WalletMultiButton />
      </div>
      {publicKey && (
        <div>
          <Paper component='form' className={classes.root}>
            <InputBase
              disabled
              className={classes.input}
              value={publicKey.toString()}
            />
            <Divider className={classes.divider} orientation='vertical' />
            <IconButton
              color='primary'
              className={classes.iconButton}
              aria-label='directions'
            >
              <CopyToClipboard text={publicKey.toString()}>
                <span>
                  <FileCopyIcon />
                </span>
              </CopyToClipboard>
            </IconButton>
          </Paper>
        </div>
      )}
    </>
  );
};
