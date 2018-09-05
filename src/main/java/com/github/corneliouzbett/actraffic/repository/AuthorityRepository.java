package com.github.corneliouzbett.actraffic.repository;

import com.github.corneliouzbett.actraffic.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
