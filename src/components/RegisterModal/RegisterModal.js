import React, { Component } from 'react'
import { Modal } from 'reactstrap'

export default class RegisterModal extends Component {
    render() {
        return  <Modal class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Регистрaция</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="register-form" action="registerUser" method="POST">
                                    <div class="form-group">
                                        <label for="registerEmail">Email</label> <input name="email"
                                            type="email" class="form-control" id="registerEmail"
                                            placeholder="Въведи email"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="registerUsername">Потребителско име</label> <input
                                            name="username" type="text" class="form-control"
                                            id="registerUsername" placeholder="Въведи потребителско име"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="registerPassword">Парола</label> <input
                                            name="password" type="password" class="form-control"
                                            id="registerPassword" placeholder="Въведи парола"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="repeatPassword ">Повтори паролата</label> <input
                                            type="password" class="form-control" id="repeatPassword"
                                            placeholder="Повтори паролата"></input>
                                    </div>
                                </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-dismiss="modal">Откажи</button>
                                <button id="confirm-register" type="button" class="btn btn-custom">Напред</button>
                            </div>
                        </div>
                    </div>
                </Modal>
    }
}
