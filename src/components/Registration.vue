<template>
    <div class="wrapper">
        <div class="container">
            <div class="user">
                <span class="user__about">Для регистрации необходимо заполнить:</span>
                <form class="user__form" action="#" method="post" enctype="multipart/form-data"
                      @submit.prevent="submitHandler">
                    <div class="user-personal">
                        <span class="user-personal__about"></span>
                        <div class="user-personal__input-field">
                            <label for="surname">Фамилия <font color="red">*</font></label>
                            <input
                                    id="surname"
                                    type="text"
                                    placeholder="Введите фамилию"
                                    v-model.trim="surname"
                                    :class="{invalid: ($v.surname.$dirty && !$v.surname.required) || ($v.surname.$dirty && !$v.surname.maxLength) || ($v.surname.$dirty && !$v.surname.rusLiter)}"
                            >
                            <small
                                    v-if="$v.surname.$dirty && !$v.surname.required"
                            >Введите фамилию</small>
                            <small
                                    v-else-if="$v.surname.$dirty && !$v.surname.rusLiter"
                            >Введите фамилию на русском языке</small>
                            <small
                                    v-else-if="$v.surname.$dirty && !$v.surname.maxLength"
                            >Вы превысили 20 символов</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label for="name">Имя <font color="red">*</font></label>
                            <input
                                    id="name"
                                    type="text"
                                    placeholder="Введите имя"
                                    v-model.trim="name"
                                    :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.maxLength) || ($v.name.$dirty && !$v.name.rusLiter)}"
                            >
                            <small
                                    v-if="$v.name.$dirty && !$v.name.required"
                            >Введите фамилию</small>
                            <small
                                    v-else-if="$v.name.$dirty && !$v.name.rusLiter"
                            >Введите фамилию на русском языке</small>
                            <small
                                    v-else-if="$v.name.$dirty && !$v.name.maxLength"
                            >Вы превысили 20 символов</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label for="middle-name">Отчество</label>
                            <input
                                    id="middle-name"
                                    type="text"
                                    placeholder="Введите отчество"
                            >
                        </div>
                        <div class="user-personal__date">
                            <label for="birthDay">Дата рождения <font color="red">*</font></label>
                            <input
                                    id="birthDay"
                                    type="date"
                                    v-model.trim="birthday"
                                    :class="{invalid: ($v.birthday.$dirty && !$v.birthday.required) || ($v.birthday.$dirty && !$v.birthday.maxValue) || ($v.birthday.$dirty && !$v.birthday.minValue)}"
                            >
                            <small
                                    v-if="$v.birthday.$dirty && !$v.birthday.required"
                            >Введите дату рождения</small>
                            <small
                                    v-else-if="$v.birthday.$dirty && !$v.birthday.maxValue"
                            >Выбрана ненаступившая дата</small>
                            <small
                                    v-else-if="$v.birthday.$dirty && !$v.birthday.minValue"
                            >Выбрана слишком старая дата</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label for="tel">Номер телефона <font color="red">*</font></label>
                            <input
                                    id="tel"
                                    type="tel"
                                    placeholder="79080671699"
                                    v-model.trim="tel"
                                    :class="{invalid: ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.phoneSeven) || ($v.tel.$dirty && !$v.tel.maxLength) || ($v.tel.$dirty && !$v.tel.minLength) || ($v.tel.$dirty && !$v.tel.phoneValid)}"
                            >
                            <small
                                    v-if="$v.tel.$dirty && !$v.tel.required"
                            >Вы не ввели номер телефона</small>
                            <small
                                    v-else-if="$v.tel.$dirty && !$v.tel.phoneSeven"
                            >Номер телефона должен начинаться с 7</small>
                            <small
                                    v-else-if="$v.tel.$dirty && !$v.tel.phoneValid"
                            >Номер телефона должен содержать только цифры</small>
                            <small
                                    v-else-if="($v.tel.$dirty && !$v.tel.maxLength) || ($v.tel.$dirty && !$v.tel.minLength)"
                            >Введен некорректный номер телефона</small>

                        </div>
                        <div>
                            <label class="typo__label">Выберите пол</label>
                            <multiselect
                                    v-model="selected2"
                                    placeholder="Выберите пол"
                                    :show-labels="false"
                                    :multiple="false"
                                    :options="options2"
                            ></multiselect>
                        </div>
                        <div :class="{ 'invalid': isInvalid2 || ($v.selected.$dirty && !$v.selected.required)}">
                            <label>Выберите категорию клиента <font color="red">*</font></label>
                            <multiselect
                                    v-model="selected"
                                    placeholder="Выберите категорию клиента"
                                    :show-labels="false"
                                    :multiple="true"
                                    :options="options"
                                    @input="onChange2"
                                    @close="onTouch2"
                            ></multiselect>
                            <small v-if="isInvalid2 || ($v.selected.$dirty && !$v.selected.required)"
                            >Не выбрано значение</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label>Выбор врача:</label>
                            <div class="user-personal__selector">
                                <select>
                                    <option value="">Выбрать</option>
                                    <option value="value1">Иванов</option>
                                    <option value="value2">Захаров</option>
                                    <option value="value3">Чернышева</option>
                                </select>
                            </div>
                        </div>
                        <div class="user-personal__checkbox-field">
                            <label for="scales">Не отправлять СМС</label>
                            <input class="checkbox" type="checkbox" id="scales" name="scales">
                        </div>
                    </div>
                    <div class="user-personal-adress">
                        <span class="user-personal__about"></span>
                        <div class="user-personal__input-field">
                            <label for="pIndex">Почтовый индекс</label>
                            <input
                                    id="pIndex"
                                    type="number"
                                    placeholder="414000"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="country">Страна</label>
                            <input
                                    id="country"
                                    type="text"
                                    placeholder="Введите страну"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="region">Область</label>
                            <input
                                    id="region"
                                    type="text"
                                    placeholder="Введите область"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="city">Город <font color="red">*</font></label>
                            <input
                                    id="city"
                                    type="text"
                                    placeholder="Введите город"
                                    v-model.trim="city"
                                    :class="{invalid: ($v.city.$dirty && !$v.city.required) || ($v.city.$dirty && !$v.city.maxLength) || ($v.city.$dirty && !$v.city.rusLiter)}"
                            >
                            <small
                                    v-if="$v.city.$dirty && !$v.city.required"
                            >Введите город</small>
                            <small
                                    v-else-if="$v.city.$dirty && !$v.city.rusLiter"
                            >Введите город на русском языке</small>
                            <small
                                    v-else-if="$v.city.$dirty && !$v.city.maxLength"
                            >Вы превысили 20 символов</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label for="street">Улица</label>
                            <input
                                    id="street"
                                    type="text"
                                    placeholder="Введите улицу"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="house">Дом</label>
                            <input
                                    id="house"
                                    type="text"
                                    placeholder="Введите дом"
                            >
                        </div>
                    </div>
                    <div class="user-personal-document">
                        <span class="user-personal__about"></span>
                        <div class="user-document">
                            <label>Выберите документ: <font color="red">*</font></label>
                            <div class="user-document__selector">
                                <select v-model.trim="typeDoc"  :class="{invalid: $v.typeDoc.$dirty && !$v.typeDoc.required}">
                                    <option value="" selected>Выбрать</option>
                                    <option value="value1">Паспорт</option>
                                    <option value="value2">Свидетельство о рождении</option>
                                    <option value="value3">Водительское удостоверение</option>
                                </select>
                            </div>
                            <small
                                    v-if="$v.typeDoc.$dirty && !$v.typeDoc.required"
                            >Выберите документ</small>
                        </div>
                        <div class="user-personal__input-field">
                            <label for="serial">Серия</label>
                            <input
                                    id="serial"
                                    type="text"
                                    placeholder="Введите серию"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="docNumber">Номер</label>
                            <input
                                    id="docNumber"
                                    type="text"
                                    placeholder="Введите номер"
                            >
                        </div>
                        <div class="user-personal__input-field">
                            <label for="agency">Кем выдан</label>
                            <input
                                    id="agency"
                                    type="text"
                                    placeholder="Введите, кем выдан"
                            >
                        </div>
                        <div class="user-personal__date">
                            <label for="dateGive">Дата выдачи <font color="red">*</font></label>
                            <input
                                    id="dateGive"
                                    type="date"
                                    v-model.trim="dateDoc"
                                    :class="{invalid: ($v.dateDoc.$dirty && !$v.dateDoc.required) || ($v.dateDoc.$dirty && !$v.dateDoc.maxValue)}"
                            >
                            <small
                                    v-if="$v.dateDoc.$dirty && !$v.dateDoc.required"
                            >Введите дату выдачи</small>
                            <small
                                    v-else-if="$v.dateDoc.$dirty && !$v.dateDoc.maxValue"
                            >Выбрана ненаступившая дата</small>
                        </div>
                    </div>
                    <div class="user-personal__button">
                        <button class="user__btn" type="submit">Зарегистрироваться</button>
                    </div>
                </form>
                <small class="outline">*Поле обязательное для заполнения</small>
            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, maxLength, minValue, maxValue} from "vuelidate/lib/validators"
    import Multiselect from "vue-multiselect"

    const maxVal = (value) => value < new Date().toISOString()
    const minVal = (value) => value > new Date('01/01/1914').toISOString()
    const rusAlpha = (value) => /[а-яА-ЯЁё]/.test(value)
    const isPhone = (value) => /^\+?[0-9]+$/.test(value)
    const sevenNum = (value) => value.toString()[0] === '7'

    export default {
        name: "Registration",
        validations: {
            surname: {required, maxLength: maxLength(20), rusLiter: rusAlpha},
            name: {required, maxLength: maxLength(20), rusLiter: rusAlpha},
            birthday: {required, maxValue: maxVal,  minValue: minVal},
            selected: {required},
            tel: {required, maxLength: maxLength(11), minLength: minLength(11), phoneValid:isPhone, phoneSeven:sevenNum},
            city: {required, maxLength: maxLength(20), rusLiter: rusAlpha},
            typeDoc: {required},
            dateDoc: {required, maxValue: maxVal}
        },
        components: {
            Multiselect
        },
        data() {
            return {
                surname: '',
                name: '',
                birthday: '',
                tel: '',
                city: '',
                typeDoc: '',
                dateDoc: '',
                isTouched1: false,
                isTouched2: false,
                selected: '',
                options: ['VIP', 'Проблемные', 'ОМС'],
                value1: [],
                value2: [],
                selected2: null,
                options2: ['Мужской', 'Женский']
            }
        },
        computed: {
            isInvalid2 () {
            return this.isTouched2 && this.value2.length === 0
            }
        },
        methods: {
            submitHandler() {
                if (this.$v.$invalid){
                    this.$v.$touch()
                    return
                }
                alert('Вы успешно ввели данные!')
            },
            onChange2 (value) {
                this.value2 = value
            },
            onTouch2 () {
                this.isTouched2 = true
            }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="sass" scoped>
    .wrapper
        @media (max-width: 1200px)
            .wrapper
                max-width: 970px
        @media (max-width: 992px)
            .wrapper
                max-width: 750px
        @media (max-width: 767px)
            .wrapper
                max-width: none
                select
                    max-width: none
                input
                    max-width: none
            /deep/ .multiselect
                .multiselect__tags
                    max-width: none !important
                .multiselect__select
                    left: unset !important

        .container
            background: linear-gradient(45deg, #1187d1 30%, #22b2ea 80%, #22cfea)
            display: flex
            justify-content: center
            min-height: 100vh
            box-sizing: border-box
            padding: 25px

            .user
                max-width: 700px
                width: 100%
                padding: 30px
                background: #fff
                box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.125)
                border-radius: 5px
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center

                .user__about
                    text-transform: uppercase
                    margin-bottom: 10px
                    font-size: 20px
                    font-weight: 600
                    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1)
                    line-height: 20px

                .outline
                    font-size: 12px
                    padding-top: 15px

                form
                    width: 100%
                    max-width: 500px
                    label
                        display: block
                        padding: 10px 0
                    select
                        box-sizing: border-box
                        padding-left: 0.5em
                        max-width: 222px
                        height: 30px
                        border: 1px solid #dddddd
                        border-radius: 4px
                        background: #f9f9f9
                        transition: background 0.25s, border-color 0.25s, color 0.25s
                        font-size: 0.9em
                    input
                        display: block
                        box-sizing: border-box
                        width: 100%
                        max-width: 500px
                        outline: none
                        border: 1px solid #dddddd
                        border-radius: 4px
                        background: #f9f9f9
                        transition: background 0.25s, border-color 0.25s, color 0.25s
                        padding: 0.8em
                        font-size: 0.9em
                    input:focus
                        background: #ffffff
                    input::placeholder
                        color: #bbbbbb
                    small
                        color: red
                        font-size: 0.9em
                    .user-personal__date
                        input
                            padding: 11.4px
                    .user__btn
                        position: relative
                        left: 50%
                        transform: translate(-50%, 0)
                        font-weight: 600
                        font-size: 1.1em
                        padding: 10px 16px
                        margin: 10px 0
                        color: #ffffff
                        background: #22b2ea
                        border: 1px solid #22b2ea
                    .user__btn:hover
                        background: #27a3e6
                        box-shadow: 0 0 5px blue
                    .user-personal__checkbox-field
                        padding: 15px 0 15px
                        display: flex
                        align-items: center
                        .checkbox
                            display: flex
                            width: 80px
                            height: 16px
                    .invalid
                        border-color: red
                        visibility: visible
                        /deep/ .multiselect
                            .multiselect__tags
                                border-color: red

                /deep/ .multiselect
                    .multiselect__tags
                        box-sizing: border-box
                        background: #f9f9f9
                        transition: background 0.25s, border-color 0.25s, color 0.25s
                        border: 1px solid #dddddd
                        border-radius: 4px
                        font-size: 0.9em
                        max-width: 500px
                    .multiselect__select
                        left: 457px
</style>