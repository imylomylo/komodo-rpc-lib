var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const axios = require("axios");

module.exports = function stdrpc(_config) {
	if (typeof _config !== "object") throw new Error("Expected 'config' to be an object");

	const config = _extends({
		url: "http://localhost:8332",
		methodTransform: a => a
	}, _config);

	return new Proxy({}, {
		set(target, method, handler) {
			target[method] = handler; // allow overwriting of methods for testing
		},

		has() {
			return true; // for sinon spies/stubs testing
		},

		get(target, method) {
			if (typeof target[method] === "function") return target[method];

			return (() => {
				var _ref = _asyncToGenerator(function* (...params) {
					method = config.methodTransform(method);

					const requestData = {
						jsonrpc: "2.0",
						method,
						params,
						id: Date.now()
					};

					const requestConfig = {};

					if (typeof config.username === "string" && typeof config.password === "string") requestConfig.auth = {
						username: config.username,
						password: config.password
					};


					const { data } = yield axios.post(config.url, requestData, requestConfig);

					if (data.error) throw new Error(`${data.error.code}: ${data.error.message}`);

					return data.result;
				});

				return function () {
					return _ref.apply(this, arguments);
				};
			})();
		}
	});
};
