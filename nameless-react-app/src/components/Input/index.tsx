// import { Flex, TextInput as MantineTextInput, TextInputProps as MantineTextInputProps, Text } from "@mantine/core";
// import React, { useEffect, useState } from "react";

// import type { Mappings } from "@/types/mapping";

// import typo from "@/styles/globals.module.css";
// import { generateKeyList, getStringFromMappings } from "@/utils/mappingUtil";

// type TextInputProps = MantineTextInputProps & {
//   maxLength?: number;
//   unitLabel?: string;
//   underLabel?: string;
//   style?: React.CSSProperties | undefined;
//   value?: string;
//   mappings?: Mappings;
//   mappingKey?: string | string[];
//   onChangeValue: (text: string) => void;
//   onBlur?: (key: string) => void;
// };

// export function TextInput({
//   disabled = false,
//   label,
//   unitLabel,
//   underLabel,
//   placeholder,
//   maxLength,
//   error,
//   value,
//   style,
//   onChangeValue,
//   onBlur,
//   icon,
//   mappings,
//   mappingKey,
//   ...props
// }: TextInputProps) {
//   const [currentLength, setCurrentLength] = useState(0);
//   const displayPlaceholder =
//     mappings && mappingKey && !placeholder
//       ? getStringFromMappings(mappings, generateKeyList(mappingKey, "placeholder"))
//       : placeholder;
//   const displayUnitLabel =
//     mappings && mappingKey && !unitLabel
//       ? getStringFromMappings(mappings, generateKeyList(mappingKey, "unitLabel"))
//       : unitLabel;
//   const displayMaxLength =
//     mappings && mappingKey && !maxLength
//       ? parseInt(getStringFromMappings(mappings, generateKeyList(mappingKey, "maxLength")))
//       : maxLength;
//   const isShowLength = !(!displayMaxLength || isNaN(displayMaxLength));

//   useEffect(() => {
//     setCurrentLength(value ? value?.length : 0);
//   }, [value]);

//   return (
//     <div style={{ ...(style || {}) }}>
//       {label && (
//         <Text className={typo.size_14_600} style={{ marginBottom: "5px" }}>
//           {label}
//         </Text>
//       )}

//       <Flex align="center" w={"100%"}>
//         <MantineTextInput
//           disabled={disabled}
//           error={error ? true : false}
//           icon={icon}
//           label={""}
//           labelProps={{ className: typo.size_14_600 }}
//           maxLength={isShowLength ? displayMaxLength : undefined}
//           placeholder={displayPlaceholder}
//           style={{ flex: "1" }}
//           value={value}
//           onBlur={onBlur}
//           onChange={(event) => {
//           onChangeValue(event.currentTarget.value);
//           }}
//           {...props}
//         />
//         {displayUnitLabel && <Text ml={8}>{displayUnitLabel}</Text>}
//       </Flex>

//       <Flex align="center" direction="row">
//         {underLabel && (
//           <Text ml={10} mt={4} size={10} style={{ color: "#666" }}>
//             {underLabel}
//           </Text>
//         )}

//         {isShowLength && (
//           <Text color="gray" ml="auto" size={10}>
//             {currentLength}/{displayMaxLength}
//           </Text>
//         )}
//       </Flex>

//       {error !== "" && (
//         <Text c={"red"} fw={300} size={11}>
//           {error}
//         </Text>
//       )}
//     </div>
//   );
// }
