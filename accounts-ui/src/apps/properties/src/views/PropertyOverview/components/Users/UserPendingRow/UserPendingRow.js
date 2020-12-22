import { PureComponent } from 'react'
import styles from './UserPendingRow.less'

import { cancelInvite } from '../../../../../store/sites'
import { zConfirm } from '../../../../../../../../shell/store/confirm'
import { notify } from '../../../../../../../../shell/store/notifications'

import { Button } from '@zesty-io/core/Button'

export default class UserPendingRow extends PureComponent {
  render() {
    return (
      <article className={styles.UserRow}>
        <span className={styles.name}>
          <em>Pending User</em>
        </span>
        <span className={styles.email}>{this.props.email}</span>
        {this.props.isAdmin ? (
          <span className={styles.action}>
            {this.props.pending ? (
              <Button
                onClick={() => this.confirm(this.props.inviteZUID)}
                id={`revoke-button`}>
                <i className="fas fa-ban" aria-hidden="true" />
                Cancel Invite
              </Button>
            ) : null}
          </span>
        ) : null}
        <span></span>
      </article>
    )
  }

  confirm = inviteZUID => {
    this.props.dispatch(
      zConfirm({
        prompt: 'Are you sure you want to cancel this users invite?',
        callback: result => {
          if (result) {
            this.props
              .dispatch(cancelInvite(inviteZUID, this.props.siteZUID))
              .then(() => {
                this.props.dispatch(
                  notify({
                    message: 'User invite cancelled',
                    type: 'success'
                  })
                )
              })
              .catch(() => {
                this.props.dispatch(
                  notify({
                    message: 'Error cancelling invite',
                    type: 'error'
                  })
                )
              })
          }
        }
      })
    )
  }
}
