package com.example.videocall;

import com.example.videocall.user.User;
import com.example.videocall.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VideocallApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideocallApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			UserService service
	){
		return args -> {
			service.register(User.builder()
					.username("Ulugbek")
					.email("ulugbek@mail.com")
					.password("ulugbek0911")
					.build());

			service.register(User.builder()
					.username("Otabek")
					.email("otabek@mail.com")
					.password("otabek000")
					.build());

			service.register(User.builder()
					.username("Jaxongir")
					.email("jaxongir@mail.com")
					.password("jaxongir000")
					.build());
		};
	}
}
