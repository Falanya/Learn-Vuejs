<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            handleLogin() {
                console.log(this.email);
            }
        },
    }

</script>

<template>
    <div class="login-container">
        <form @submit.prevent="handleLogin">
            <div class="login-wrapper">
                <div class="panel-head">
                    <h2 class="heading-1">Đăng nhập</h2>
                    <div class="description">Chào mừng bạn đến với hệ thống <br><span>VUE SYSTEM</span></br></div>
                </div>
                <div class="panel-body">
                    <div class="form-row mb-20">
                        <div class="label">Tên đăng nhập</div>
                        <input 
                        type="text"
                        v-model="email" 
                        value="" 
                        class="input-text" 
                        autocomplete="off" >
                    </div>
                    <div class="form-row mb-5">
                        <div class="label">
                            <div class="uk-flex uk-flex-between">
                                <span>Mật khẩu</span>
                                <a href="" title="" class="forgot">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <input 
                        type="password"
                        v-model="password" 
                        value="" 
                        class="input-text" 
                        autocomplete="off" >
                    </div>
                    <div class="form-row mb-20">
                        <div class="uk-flex uk-flex-middle">
                            <input type="checkbox" 
                            name="remmeber" 
                            class="input-checkbox" 
                            id="forgot-password" >
                            <label for="forgot-password">Ghi nhớ mật khẩu</label>
                        </div>
                    </div>
                    <div class="form-row mb-5">
                        <button class="uk-button btn-login">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .login-container {
        padding-top: 100px;
    }
    
    .login-wrapper {
        max-width: 410px;
        margin: 0 auto;
        background: white;
        border-radius: 10px;
        box-shadow: 0 0.125rem 0 rgba(10, 10, 10, .04);
        padding: 48px;
        background: white;
    }

    .login-wrapper .heading-1 {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 24px;
    }

    .login-container .panel-head {
        text-align: center;
        margin-bottom: 30px;
    }

    .login-container .description {
        font-size: 15px;
        color: black;
    }

    .login-container .description span {
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        color: rgb(132,90,223);
    }
    
    .btn-login {
        background: rgb(132,90,223);
        width: 100%;
        border-radius: 5px;
        height: 40px;
        color: white;
    }

    .login-wrapper .label {
        font-weight: 600;
        margin-bottom: 5px;
        color: black;
    }

    .form-row .forgot {
        color: rgb(230,83,60);
        font-size: 13px;
    }
</style>