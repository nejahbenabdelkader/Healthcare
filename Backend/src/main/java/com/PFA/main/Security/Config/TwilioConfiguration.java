package com.PFA.main.Security.Config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
@ToString
@NoArgsConstructor
public class TwilioConfiguration {
    private String accountSid = "ACcbfd6c4de0a4e3a0463bc1da279d122f";
    private String authToken = "0bebd63bd65873ecb47c21720e641601";
    private String fromNumber = "+19123725431";

}
