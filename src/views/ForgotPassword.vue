<template>
  <div class="forgot-password-page">
    <router-link to="/" class="home-icon-link" title="На главную">
      <img src="@/assets/icons/home.svg" alt="На главную" />
    </router-link>
    <div class="forgot-password-container">
      <div class="forgot-password-header">
        <img src="@/assets/logo.svg" alt="Buyursin logo" class="logo" />
        <h1 class="title">Восстановить пароль</h1>
        <p class="subtitle">Пройдите шаги, чтобы сбросить пароль</p>
      </div>

      <!-- Этап 1: Номер телефона -->
      <form v-if="step === 1" @submit.prevent="handleStep1" class="form">
        <div class="step-info">
          <div class="step-icon">1/3</div>
          <h3>Введите номер телефона</h3>
          <p>Мы отправим код подтверждения на ваш номер.</p>
        </div>
        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">📱</div>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              class="form-input"
              placeholder="Номер телефона"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Отправка...' : 'Отправить код' }}
        </button>
      </form>

      <!-- Этап 2: OTP код -->
      <form v-if="step === 2" @submit.prevent="handleStep2" class="form">
        <div class="step-info">
          <div class="step-icon">2/3</div>
          <h3>Подтверждение номера</h3>
          <p>Код отправлен на номер {{ maskedPhone }}</p>
        </div>
        <div class="form-group">
          <div class="otp-input-wrapper">
            <input
              id="otp"
              v-model="formData.otp"
              type="text"
              class="form-input otp-input"
              placeholder="000000"
              maxlength="6"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Проверка...' : 'Подтвердить' }}
        </button>
        <div class="form-actions">
          <button type="button" @click="resendOtp" class="btn-link" :disabled="resendTimer > 0">
            {{ resendTimer > 0 ? `Отправить снова (${resendTimer}s)` : 'Отправить код снова' }}
          </button>
          <button type="button" @click="step = 1" class="btn-link">Назад</button>
        </div>
      </form>

      <!-- Этап 3: Новый пароль -->
      <form v-if="step === 3" @submit.prevent="handleStep3" class="form">
        <div class="step-info">
          <div class="step-icon">3/3</div>
          <h3>Создайте новый пароль</h3>
          <p>Пароль должен содержать не менее 6 символов.</p>
        </div>
        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">🔒</div>
            <input
              id="password"
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Новый пароль"
              required
            />
            <button type="button" @click="showPassword = !showPassword" class="password-toggle">
              <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle password visibility">
            </button>
          </div>
        </div>
        <div class="form-group">
          <div class="input-wrapper">
            <div class="input-icon">✅</div>
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Подтвердите пароль"
              required
            />
             <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="password-toggle">
              <img :src="showConfirmPassword ? eyeOpenIcon : eyeClosedIcon" alt="Toggle password visibility">
            </button>
          </div>
          <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
        </div>
        <button type="submit" class="btn-primary" :disabled="loading || passwordError">
          <span v-if="loading" class="loading-spinner"></span>
          {{ loading ? 'Сохранение...' : 'Сбросить пароль' }}
        </button>
      </form>
      
      <div class="form-links">
        <router-link to="/login" class="link">Вернуться ко входу</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import eyeOpenIcon from '@/assets/icons/eye-open.svg';
import eyeClosedIcon from '@/assets/icons/eye-closed.svg';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      step: 1,
      loading: false,
      resendTimer: 0,
      showPassword: false,
      showConfirmPassword: false,
      formData: {
        phone: '',
        otp: '',
        password: '',
        confirmPassword: ''
      },
      eyeOpenIcon,
      eyeClosedIcon
    }
  },
  computed: {
    maskedPhone() {
      if (!this.formData.phone) return '';
      const phone = this.formData.phone.toString();
      return `+998 ${phone.slice(0, 2)} *** ${phone.slice(-2)}`;
    },
    passwordError() {
      if (this.formData.password && this.formData.password.length < 6) {
        return 'Пароль должен содержать минимум 6 символов';
      }
      if (this.formData.confirmPassword && this.formData.password !== this.formData.confirmPassword) {
        return 'Пароли не совпадают';
      }
      return '';
    }
  },
  methods: {
    async handleStep1() {
      this.loading = true;
      try {
        console.log('Requesting OTP for phone:', this.formData.phone);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.step = 2;
        this.startResendTimer();
      } catch (error) {
        console.error('Error requesting OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    async handleStep2() {
      this.loading = true;
      try {
        console.log('Verifying OTP:', this.formData.otp);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.step = 3;
      } catch (error) {
        console.error('Error verifying OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    async handleStep3() {
      if (this.passwordError) return;
      this.loading = true;
      try {
        console.log('Resetting password for:', this.formData.phone);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.$router.push('/login');
      } catch (error) {
        console.error('Error resetting password:', error);
      } finally {
        this.loading = false;
      }
    },
    async resendOtp() {
      if (this.resendTimer > 0) return;
      this.loading = true;
      try {
        console.log('Resending OTP');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.startResendTimer();
      } catch (error) {
        console.error('Error resending OTP:', error);
      } finally {
        this.loading = false;
      }
    },
    startResendTimer() {
      this.resendTimer = 60;
      const timer = setInterval(() => {
        this.resendTimer--;
        if (this.resendTimer <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
}
</script>

<style scoped>
/* Using similar styles from LoginPage for consistency */
.forgot-password-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-purple) 0%, var(--light-purple) 100%);
  padding: 20px;
}

.forgot-password-container {
  background: var(--white-color);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(123, 44, 191, 0.1);
}

.forgot-password-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  height: 48px;
  margin-bottom: 16px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0 0 8px 0;
}

.subtitle {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-info {
  text-align: center;
  margin-bottom: 16px;
  padding: 16px;
  background: var(--bg-purple);
  border-radius: 16px;
}

.step-icon {
  font-size: 12px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.step-info h3 {
  color: var(--primary-color);
  margin: 0 0 8px 0;
  font-size: 18px;
}

.step-info p {
  margin: 4px 0;
  color: var(--text-color);
  font-size: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  background: var(--bg-purple);
  box-shadow: 0 0 0 2px var(--primary-color);
}

.input-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--primary-color);
}

.form-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
}

.form-input::placeholder {
  color: #999;
}

.otp-input-wrapper {
  display: flex;
  justify-content: center;
}

.otp-input {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 8px;
  background: var(--bg-purple);
  border-radius: 16px;
  padding: 16px;
  max-width: 200px;
}

.password-toggle {
  background: none;
  border: none;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle img {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.password-toggle:hover img {
  opacity: 1;
}

.error-text {
  font-size: 12px;
  color: #e74c3c;
  padding-left: 16px;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(123, 44, 191, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.form-links {
  text-align: center;
  margin-top: 24px;
}

.link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
}

.link:hover {
  text-decoration: underline;
}

.btn-link {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}

.btn-link:hover:not(:disabled) {
  color: var(--secondary-color);
}

.btn-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  text-decoration: none;
}

.home-icon-link {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
  z-index: 10;
}

.home-icon-link:hover {
  background-color: rgba(255, 255, 255, 1);
}

.home-icon-link img {
  width: 20px;
  height: 20px;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .forgot-password-container {
    padding: 24px;
    margin: 10px;
  }

  .title {
    font-size: 24px;
  }

  .form-input {
    font-size: 16px;
  }

  .btn-primary {
    padding: 14px;
  }

  .otp-input {
    letter-spacing: 4px;
    padding: 12px;
    font-size: 20px;
  }
}
</style> 