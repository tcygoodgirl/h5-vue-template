// validate.js

// 验证手机号
export function checkPhone(value: string) {
	return /^1\d{10}$/.test(value)
}

export class Validator {
	caller: any
	validators: any
	constructor(validators: Object, caller: any) {
		this.validators = validators
		this.caller = caller || this
	}

	// 单项表单规则校验
	validate(key: string, value: string) {
		const rule = this.validators[key]

		if (!rule) {
			return {
				bool: true
			}
		}

		for (let i = 0; i < rule.validators.length; i++) {
			const r = rule.validators[i]
			if (!r.validator.call(this.caller, value)) {
				this.validators[key].errTips = r.tips
				return {
					bool: false,
					errTips: r.tips
				}
			}
		}
		this.validators[key].errTips = ''
		return {
			bool: true
		}
	}
	// 表单验证
	validateRules(form: Object, showToast = true) {
		let result = true
		for (const key in form) {
			const res = this.validate(key, form[key])
			if (!res.bool) {
				result = false
				showToast && window.alert(res.errTips)
				break
			}
		}
		return result
	}
}
