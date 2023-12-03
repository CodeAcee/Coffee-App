import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "../UI/Inputs/Input";
import Button from "../UI/Buttons/Button";
import { Controller, useFormContext } from "react-hook-form";
import PhonesInput from "../UI/Inputs/PhoneInput";

const AuthForm = ({ isLogin, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormContext();

  if (isLogin) {
    return (
      <View style={styles.authContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PhonesInput
              inputConfig={{
                placeholder: "XX XX XXX",
                onBlur: onBlur,
                onChangeFormattedText: (text) => onChange(text),
                value: value,
              }}
              required
              errorMessage={errors.phone && errors.phone.message}
            />
          )}
          name="phone"
        />
        <Button onPress={handleSubmit(onSubmit)}>Продолжить</Button>
      </View>
    );
  }

  return (
    <View style={styles.authContainer}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <PhonesInput
            inputConfig={{
              placeholder: "XX XX XXX",
              onBlur: onBlur,
              onChangeFormattedText: (text) => onChange(text),
              value: value,
            }}
            required
            errorMessage={errors.phone && errors.phone.message}
          />
        )}
        name="phone"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Имя"
            inputConfig={{
              placeholder: "Микола",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value,
              keyboardType: "default",
              autoCapitalize: "none",
            }}
            required
            errorMessage={errors.name && errors.name.message}
          />
        )}
        name="name"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label={"Email"}
            inputConfig={{
              placeholder: "coffe.app@gmail.com",
              onBlur: onBlur,
              onChangeText: onChange,
              value: value,
              keyboardType: "email-address",
              autoCapitalize: "none",
            }}
            required
            errorMessage={errors.email && errors.email.message}
          />
        )}
        name="email"
      />

      <Button onPress={handleSubmit(onSubmit)}>Продолжить</Button>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  authContainer: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
});
