import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import { connect,useDispatch,useSelector } from 'react-redux'
import { increment, decrement } from '../src/actions'
import { bindActionCreators } from 'redux'
import { INCREMENT } from '../src/constants'
import wrapper from '../src/store'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = ({
  value,action,from,increment,decrement
}) => {
  const classes = useStyles()
  // const dispatch = useDispatch();
  // const {value,action,from} = useSelector(state => state)
  // dispatch(increment(),decrement())

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Dispatched from <b>{from}</b>
        </Typography>
        <Typography variant='h3' component='h2'>
          {value}
        </Typography>
        <Typography color='textSecondary'>{action}</Typography>
      </CardContent>
      <CardActions>
        <Fab
          variant='round'
          color='primary'
          size='small'
          onClick={() => increment()}
        >
          <AddIcon />
        </Fab>
        <Fab
          variant='round'
          color='secondary'
          size='small'
          onClick={() => decrement()}
        >
          <RemoveIcon />
        </Fab>
      </CardActions>
    </Card>
  )
}

Index.getInitialProps = ({ store }) => {
  store.dispatch({
    type: INCREMENT,
    from: 'server'
  })

  return {}
}
// export const getStaticProps = wrapper.getStaticProps(store => ()=> {
//   store.dispatch({
//         type: INCREMENT,
//         from: 'server'
//       })
// }) 
const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(
  state => state,
  mapDispatchToProps
)(Index)

// export default Index
