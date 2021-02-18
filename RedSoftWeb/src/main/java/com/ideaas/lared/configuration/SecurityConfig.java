package com.ideaas.lared.configuration;

import java.util.Properties;

import com.ideaas.lared.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebSecurity
@Order(Ordered.HIGHEST_PRECEDENCE)
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    @Qualifier("usuarioService")
    private UserDetailsService userService;


    @Value(value = "${com.auth0.domain}")
    private String domain;

    @Value(value = "${com.auth0.clientId}")
    private String clientId;

    @Value(value = "${com.auth0.clientSecret}")
    private String clientSecret;

    @Override
    protected void configure(HttpSecurity security) throws Exception {
        //H2 Config
        security.headers().frameOptions().disable();
        security.headers().frameOptions().sameOrigin();
        security.csrf().disable().
                authorizeRequests()
                .antMatchers("/MDB/**").permitAll()
                .antMatchers("/build/**").permitAll()
                .antMatchers("/data/**").permitAll()
                .antMatchers("/pages/**").permitAll()
                .antMatchers("/assets/**").permitAll()
                .antMatchers("/api/cart/**").permitAll()
                .antMatchers("/api/orders/**").permitAll()
                .antMatchers("/file/uploadFile").permitAll()
                .antMatchers("/cart/**").permitAll()
                .antMatchers("/sendEmail").permitAll()
                .antMatchers("/authenticate/**").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**" ).permitAll()
                .antMatchers(HttpMethod.GET, "/index*", "/static/**", "/*.js", "/*.json", "/*.ico").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

                //.defaultSuccessUrl("/index.html",true);

        security.logout()
                .logoutSuccessUrl("/login")
                .invalidateHttpSession(true)
                .deleteCookies("REDSOFT");

        security.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("*").allowedHeaders("*");
            }
        };
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationSuccessHandler myAuthenticationSuccessHandler(){
        return new MySimpleUrlAuthenticationSuccessHandler();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("fede")
                .password("{noop}fede")
                .roles("USER")
                .and()
                .withUser("admin")
                .password("{noop}admin")
                .credentialsExpired(false)
                .accountExpired(false)
                .accountLocked(false)
                .authorities("WRITE_PRIVILEGES", "READ_PRIVILEGES")
                .roles("MANAGER");
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return this.authenticationManager();
    }

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("ail.laredwifi.com.ar");
        mailSender.setPort(587);
    
        mailSender.setUsername("gestiones@laredwifi.com.ar");
        mailSender.setPassword("Sirius2021paz");

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        //props.put("mail.smtps.ssl.checkserveridentity", "true");
        //props.put("mail.smtps.ssl.trust", "*");

        return mailSender;
    }
}
