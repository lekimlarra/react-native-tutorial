import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false, // Esto oculta el encabezado en todas las pantallas
    }}>
      <Stack.Screen name="index" options={{ }}/>
      <Stack.Screen name="screens/ViewImageScreen" options={{ headerShown: false }}/>
    </Stack>
  );
}
